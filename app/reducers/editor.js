import {SET_EDITOR_CONTENT} from '../constants';

const initialEditorState = {
  editorContent: '//SAMPJCL JOB 1,CLASS=6,MSGCLASS=0,NOTIFY=&SYSUID\r' +
  '//*\r' +
  '//STEP010  EXEC PGM=SORT\r' +
  '//SORTIN   DD DSN=JCL.SAMPLE.INPUT,DISP=SHR\r' +
  '//SORTOUT  DD DSN=JCL.SAMPLE.OUTPUT,\r' +
  '//         DISP=(NEW,CATLG,CATLG),DATACLAS=DSIZE50\r' +
  '//SYSOUT   DD SYSOUT=*\r' +
  '//SYSUDUMP DD SYSOUT=C\r' +
  '//SYSPRINT DD SYSOUT=*\r' +
  '//SYSIN    DD *\r' +
    'SORT FIELDS=COPY\r' +
    "INCLUDE COND=(28,3,CH,EQ,C'XXX')\r" +
  '/*'
};

export default function (state = initialEditorState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {
    case SET_EDITOR_CONTENT:
      newState.editorContent = action.editorContent;
      break;

    default:
      console.log("Initial is" + initialEditorState);
      return state;
  }
  return newState;
}