import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
      description: 'Important for accessibility and SEO',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Live Performance', value: 'live' },
          { title: 'Band Photos', value: 'band' },
          { title: 'Studio', value: 'studio' },
          { title: 'Behind the Scenes', value: 'bts' },
        ],
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'featured',
      title: 'Featured Photo',
      type: 'boolean',
      description: 'Mark as featured to highlight in gallery',
      initialValue: false
    }),
    defineField({
      name: 'date',
      title: 'Date Taken',
      type: 'date',
    }),
    defineField({
      name: 'photographer',
      title: 'Photographer',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      category: 'category'
    },
    prepare(selection) {
      const { title, media, category } = selection
      return {
        title,
        subtitle: category ? `Category: ${category}` : '',
        media
      }
    }
  }
})
