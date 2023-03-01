import { EditorProps } from 'react-draft-wysiwyg'
import dynamic from 'next/dynamic'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import styled from '@emotion/styled'
import { EditorState } from 'draft-js'
import { Dispatch, SetStateAction } from 'react'
import Button from './Button'

const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((module) => module.Editor),
  {
    ssr: false,
  }
)

const Wrapper = styled.div`
  padding: 16px;
`
export default function CustomEditor({
  editorState,
  readonly = false,
  onSave,
  onEditorStateChange,
}: {
  editorState: EditorState
  readonly?: boolean
  onSave?: () => void
  onEditorStateChange?: Dispatch<SetStateAction<EditorState | undefined>>
}) {
  return (
    <Wrapper>
      <Editor
        readOnly={readonly}
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        toolbar={{
          options: ['inline', 'list', 'textAlign', 'link'],
        }}
        onEditorStateChange={onEditorStateChange}
      />
      {!readonly && <Button onClick={onSave}>Save</Button>}
    </Wrapper>
  )
}
