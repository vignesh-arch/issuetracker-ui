import React from 'react';
import { Glyphicon, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { withRouter} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

class IssueRowPlain extends React.Component{
  render() {
    const { issue, location: { search }, closeIssue, index, deleteIssue } = this.props;
    const url = { pathname: `/issues/${issue.id}`, search };
    const closeTooltip = <Tooltip id='close-tooltip'>Close Issue</Tooltip>;
    const deleteTooltip = <Tooltip id='delete-tooltip'>Delete Issue</Tooltip>;
    const editTooltip = <Tooltip id='edit-tooltip'>Edit Issue</Tooltip>;  

    function onClose(e) {
      e.preventDefault();
      closeIssue(index);
    }

    function onDelete(e) {
      e.preventDefault();
      deleteIssue(index);
    }

    const tableRow = (
      <tr>
        <td>{issue.id}</td>
        <td>{issue.status}</td>
        <td>{issue.owner}</td>
        <td>{issue.effort}</td>
        <td>{issue.created.toDateString()}</td>
        <td>{issue.due ? issue.due.toDateString() : ''}</td>
        <td>{issue.title}</td>
        <td>
          <LinkContainer to={`/edit/${issue.id}`}>
            <OverlayTrigger delayShow={1000} overlay={editTooltip}>
              <Button bsSize="xsmall">
                <Glyphicon glyph="edit" />
              </Button>
            </OverlayTrigger>
          </LinkContainer>{' '}
          <OverlayTrigger
            placement="top"
            delayShow={1000}
            overlay={closeTooltip}
          >
            <Button bsSize="xsmall" type="button" onClick={onClose}>
              <Glyphicon glyph="remove" />
            </Button>
          </OverlayTrigger>
          {'  '}
          <OverlayTrigger
            placement="top"
            delayShow={1000}
            overlay={deleteTooltip}
          >
            <Button bsSize="xsmall" type="button" onClick={onDelete}>
              <Glyphicon glyph="trash" />
            </Button>
          </OverlayTrigger>
        </td>
      </tr>
    );
    return <LinkContainer to={url}>{tableRow}</LinkContainer>;
  }
}

const IssueRow = withRouter(IssueRowPlain);
export default IssueRow;
