import mongoose, { Schema, Model, HydratedDocument } from "mongoose";

/**
 * Event domain interface (strict typing)
 */
export interface IEvent {
  title: string;
  slug: string;
  description: string;
  overview: string;
  image: string;
  venue: string;
  location: string;
  date: string; // stored as ISO YYYY-MM-DD
  time: string; // stored as HH:mm
  mode: string;
  audience: string;
  agenda: string[];
  organizer: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

type EventDocument = HydratedDocument<IEvent>;

const eventSchema = new Schema<IEvent>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, unique: true, index: true },
    description: { type: String, required: true, trim: true },
    overview: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    venue: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    mode: { type: String, required: true, trim: true },
    audience: { type: String, required: true, trim: true },
    agenda: {
      type: [String],
      required: true,
      validate: [(val: string[]) => val.length > 0, "Agenda cannot be empty"],
    },
    organizer: { type: String, required: true, trim: true },
    tags: {
      type: [String],
      required: true,
      validate: [(val: string[]) => val.length > 0, "Tags cannot be empty"],
    },
  },
  {
    timestamps: true,
    strict: true,
  }
);

/**
 * Pre-save hook:
 * - Validates required fields are non-empty
 * - Generates slug only if title changes
 * - Normalizes date to ISO YYYY-MM-DD
 * - Normalizes time to HH:mm format
 */
eventSchema.pre("save", async function () {
  const doc = this as EventDocument;

  const requiredStrings: (keyof IEvent)[] = [
    "title",
    "description",
    "overview",
    "image",
    "venue",
    "location",
    "mode",
    "audience",
    "organizer",
  ];

  for (const field of requiredStrings) {
    if (!doc[field] || (doc[field] as string).trim() === "") {
      throw new Error(`${field} is required and cannot be empty`);
    }
  }

  // Generate slug only if title changes
  if (doc.isModified("title")) {
    doc.slug = doc.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  }

  // Normalize date to ISO format (YYYY-MM-DD)
  if (doc.isModified("date")) {
    const parsedDate = new Date(doc.date);
    if (isNaN(parsedDate.getTime())) {
      throw new Error("Invalid date format");
    }
    doc.date = parsedDate.toISOString().split("T")[0];
  }

  // Normalize time to HH:mm
  if (doc.isModified("time")) {
    const match = doc.time.match(/^(\d{1,2}):(\d{2})$/);
    if (!match) {
      throw new Error("Time must be in HH:mm format");
    }

    const hours = Number(match[1]);
    const minutes = Number(match[2]);

    if (hours > 23 || minutes > 59) {
      throw new Error("Invalid time value");
    }

    doc.time = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  }
});

export const Event: Model<IEvent> =
  mongoose.models.Event || mongoose.model<IEvent>("Event", eventSchema);
