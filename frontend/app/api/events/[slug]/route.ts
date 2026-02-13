import { NextRequest, NextResponse } from 'next/server'
import type { IEvent } from '../../../../database/event.model'
import { Event } from '../../../../database'

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params

    if (!slug || slug.trim() === '') {
      return NextResponse.json(
        { error: 'Missing or invalid slug parameter' },
        { status: 400 }
      )
    }

    const normalizedSlug = slug.trim()

    const event = await Event.findOne({ slug: normalizedSlug })
      .lean<IEvent | null>()
      .exec()

    if (!event) {
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(event, { status: 200 })
  } catch (err) {
    const message =
      err instanceof Error ? err.message : 'Unknown error'

    return NextResponse.json(
      { error: 'Internal server error', details: message },
      { status: 500 }
    )
  }
}

export const runtime = 'edge'
