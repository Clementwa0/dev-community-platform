import mongoose, {
  Schema,
  Model,
  HydratedDocument,
  Types,
} from "mongoose";
import { Event } from "./event.model";

/**
 * Booking domain interface
 */
export interface IBooking {
  eventId: Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

type BookingDocument = HydratedDocument<IBooking>;

const bookingSchema = new Schema<IBooking>(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: (value: string) =>
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        message: "Invalid email format",
      },
    },
  },
  {
    timestamps: true,
    strict: true,
  }
);

/**
 * Pre-save hook:
 * - Ensures referenced event exists
 */
bookingSchema.pre("save", async function () {
  const doc = this as BookingDocument;

  const eventExists = await Event.exists({ _id: doc.eventId });

  if (!eventExists) {
    throw new Error("Referenced event does not exist");
  }
});

export const Booking: Model<IBooking> =
  mongoose.models.Booking ||
  mongoose.model<IBooking>("Booking", bookingSchema);
