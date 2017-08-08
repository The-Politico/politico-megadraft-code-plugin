/*
 * Copyright (c) 2017, Jon McClure <jmcclure@politico.com>
 *
 * License: MIT
 */

import React, {Component} from "react";

import {MegadraftPlugin, MegadraftIcons} from "megadraft";

import BlockText from "./BlockText";

import brace from "brace";
import AceEditor from "react-ace";

import "brace/mode/html";
import "brace/mode/css";
import "brace/mode/javascript";
import "brace/theme/tomorrow";

const {BlockContent, BlockData, BlockInput, CommonBlock} = MegadraftPlugin;



export default class Block extends Component {
  constructor(props) {
    super(props);

    this._handleCodeChange = ::this._handleCodeChange;
    this._handleEdit = ::this._handleEdit;

    this.actions = [
      // {"key": "edit", "icon": MegadraftIcons.EditIcon, "action": this._handleEdit},
      {"key": "delete", "icon": MegadraftIcons.DeleteIcon, "action": this.props.container.remove}
    ];
  }

  _handleEdit() {
    alert(JSON.stringify(this.props.data, null, 4));
  }

  _handleCodeChange(value) {
    this.props.container.updateData({code: value});
  }

  render(){
    return (
      <CommonBlock {...this.props} actions={this.actions}>
        <BlockData>
          <AceEditor
            mode={this.props.data.display}
            theme="tomorrow"
            onChange={this._handleCodeChange}
            value={this.props.data.code}
            fontSize="14"
            name={`editable-code-block__${this.props.data.key}`}
            editorProps={{$blockScrolling: true}}
            height="140px"
            width="100%"
            showPrintMargin={false}
          />
        </BlockData>
      </CommonBlock>
    );
  }
}
