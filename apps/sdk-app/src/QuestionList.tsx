import './QuestionList.css'
import {useDocuments, useDocument, useEditDocument} from '@sanity/sdk-react'

function QuestionTitleInput({handle}) {
	const question = useDocument(handle, 'question')

	const answer = useDocument(handle, 'answer')
	// console.log('answer', answer)
	const editAnswer = useEditDocument(handle, 'answer')

	function handleAnswerChange(event: React.ChangeEvent<HTMLInputElement>) {
		editAnswer(event.target.value)
	}

	return (
		<div className="question-wrapper">
			<div className='question'>
				<div className='label'>Q:</div>
				<div>{question}</div>
			</div>
			<div className='answer'>
				<span className='label'>A:</span>
				<input type="text" value={answer} onChange={handleAnswerChange} />
			</div>

		</div>
	)
}
/**
 * Example component that fetches and displays a list of Questions from the Sanity dataset.
 */
export function QuestionList() {
	const {data, hasMore, isPending, loadMore, count} = useDocuments({
		filter: '_type == "question"',
		batchSize: 5,
	})
	return (
		<div className="example-container">
			<h2>Question list</h2>
			<h3>Total documents: {count}</h3>
			<ol>
				{data.map((doc) => (
					<li key={doc.documentId}>
						<QuestionTitleInput handle={doc} />
						<br />
						<code>{JSON.stringify(doc, null, 2)}</code>
					</li>
				))}
			</ol>
			{hasMore && (
				<button onClick={loadMore} disabled={isPending}>
					{isPending ? 'Loading...' : 'Load More'}
				</button>
			)}
		</div>
	)
}
