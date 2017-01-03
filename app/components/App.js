import React from 'react';
import { Window, TitleBar, Text, NavPane, NavPaneItem } from 'react-desktop/windows';
import w10Edit from '../../resources/icons/w10Edit.svg';
// import punchCardLightTheme from '../../resources/icons/punchCardLightTheme.png';
// import punchCardDarkTheme from '../../resources/icons/punchCardDarkTheme.png';
import renderIcon from '../utils/renderIcon';

import { hashHistory } from 'react-router'

export default function (props) { //props is now from MY POV
  console.log("Props.children ", props.children);

  const editorContent = props.editorContent;
  const setEditorContent = props.setEditorContent;

  return (
    <Window
      color={props.color}
      theme={props.theme}
      chrome
      height="100%"
      width="100%"
      // padding="12px"
      >
      <TitleBar title="Keypunch" controls />
      <NavPane
        canPaneToggle={true} //bool Sets whether the pane can be compacted.Default value "true".
        color={props.color}	//string	Sets the main color of a component.
        defaultIsPaneExpanded={false} //string Sets whether the pane is expanded by default. Default value "true".
        //onPaneToggle function Callback function when the pane is expanded or compacted.
        paneCompactedLength={48}	//string, number	Sets the length of the pane when compacted. Default value "48px".
        paneExpandedLength='100px'	//string, number	Sets the length of the pane when expanded. Default value "200px"
        // openLength='100px'	//string, number	Sets the length of the pane when expanded. Default value "200px"
        theme={props.theme} //Sets the UI theme that is used by this component and its children elements. Property value "light", "dark"
        // push
        >
        <NavPaneItem
          title='home'
          icon={renderIcon('help', props.theme)}
          padding="10px 20px"
          onSelect={() => {
            console.log("Going to /home");
            hashHistory.push('/home');
          } }
          />
        <NavPaneItem
          title='edit'
          icon={renderIcon('punchCard', props.theme)}
          padding="10px 20px"
          onSelect={() => {
            console.log("Going to /editor");
            hashHistory.push('/editor');
          } }
          >
        </NavPaneItem>
        <NavPaneItem
          title='config'
          icon={renderIcon('settings', props.theme)}
          padding="10px 20px"
          onSelect={() => {
            console.log("Going to /config");
            hashHistory.push('/config');
          } }
          >
        </NavPaneItem>
      </NavPane>
      {props.children}
    </Window >
  )
}
