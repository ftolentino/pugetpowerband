import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'show',
  title: 'Show',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Show Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'venueAddress',
      title: 'Venue Address',
      type: 'string',
      description: 'Full address of the venue',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'doors',
      title: 'Doors Open',
      type: 'string',
      description: 'e.g., "7:00 PM"'
    }),
    defineField({
      name: 'showTime',
      title: 'Show Time',
      type: 'string',
      description: 'e.g., "8:00 PM"'
    }),
    defineField({
      name: 'ticketPrice',
      title: 'Ticket Price',
      type: 'string',
      description: 'e.g., "$15" or "$10-20"'
    }),
    defineField({
      name: 'ticketUrl',
      title: 'Ticket URL',
      type: 'url',
      description: 'Link to purchase tickets'
    }),
    defineField({
      name: 'ageRestriction',
      title: 'Age Restriction',
      type: 'string',
      options: {
        list: [
          { title: 'All Ages', value: 'all-ages' },
          { title: '18+', value: '18+' },
          { title: '21+', value: '21+' },
        ],
      },
      initialValue: 'all-ages'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'otherBands',
      title: 'Other Bands',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List other bands playing at this show'
    }),
    defineField({
      name: 'soldOut',
      title: 'Sold Out',
      type: 'boolean',
      initialValue: false
    }),
  ],
  orderings: [
    {
      title: 'Date (newest first)',
      name: 'dateDesc',
      by: [
        { field: 'date', direction: 'desc' }
      ]
    },
    {
      title: 'Date (oldest first)',
      name: 'dateAsc',
      by: [
        { field: 'date', direction: 'asc' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      venueAddress: 'venueAddress',
      date: 'date'
    },
    prepare(selection) {
      const { title, venueAddress, date } = selection
      const formattedDate = new Date(date).toLocaleDateString()
      return {
        title,
        subtitle: `${venueAddress} - ${formattedDate}`
      }
    }
  }
})
