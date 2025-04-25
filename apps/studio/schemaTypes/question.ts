import {defineType, defineField} from 'sanity'

export const questionType = defineType({
	name: 'question',
	icon: () => "❓",
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'name (optional)',
			type: 'string',
		}),
		defineField({
			name: 'email',
			title: 'email (optional)',
			type: 'string',
		}),
		defineField({
			name: 'question',
			title: 'question',
			validation: rule => rule.required(),
			type: 'text',
		}),
		defineField({
			name: 'answer',
			title: 'answer',
			type: 'text',
		}),
		defineField({
			name: 'responder',
			title: 'responder',
			type: 'text',
		}),
	],
	preview: {
		select: {
			title: 'question',
			answer: 'answer',
			responder: 'responder'
		},
		prepare(selection) {
			const {title, answer, responder} = selection

			return {
				title,
				subtitle: answer ? `Answered by ${responder}` : 'Unanswered'
			}
		},
	},
})
