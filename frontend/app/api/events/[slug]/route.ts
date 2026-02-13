import { NextResponse } from 'next/server';
import type { IEvent } from '../../../../database/event.model';
import { Event } from '../../../../database';

export async function GET(
  _req: Request,
  { params }: { params: { slug?: string } }
) {
  try {
    const slug = params?.slug;

    if (!slug || typeof slug !== 'string' || slug.trim() === '') {
      return NextResponse.json({ error: 'Missing or invalid slug parameter' }, { status: 400 });
    }

    const normalizedSlug = slug.trim();

    // Find event by slug; use lean() for a plain JS object
    const event = await Event.findOne({ slug: normalizedSlug }).lean<IEvent | null>().exec();

    if (!event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    // Return event. The model enforces shape; we cast to IEvent for typing.
    return NextResponse.json(event, { status: 200 });
  } catch (err) {
    // Unexpected errors -> 500 with minimal message
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: 'Internal server error', details: message }, { status: 500 });
  }
}

export const runtime = 'edge';
