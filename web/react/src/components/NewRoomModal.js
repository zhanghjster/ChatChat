/**
 * Created by ben on 15/12/5.
 */
import React from 'react';
import ReactDOM from 'react-dom';

export default class NewRoomModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    createRoom() {
        let closeBT = this.refs.closeBT;
        let data = {
            name: this.refs.name.value,
            description: this.refs.description.value,
            modalCb: () => {closeBT.click()}
        };
        this.props.createRoom(data);
    }

    render() {
        return (
            <div className="modal fade modal-dialog-center" id="createRoom" >
                <div className="modal-dialog ">
                    <div className="modal-content-wrap">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button ref="closeBT" type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                <h4 className="modal-title">Create Room</h4>
                            </div>
                            <div className="modal-body">
                            <form className="form-horizontal" role="form">
                                <div className="form-group">
                                    <label for="inputEmail1" className="col-lg-2 col-sm-2 control-label">Name</label>
                                    <div className="col-lg-10">
                                        <input ref="name" className="form-control" placeholder="Room Name"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="inputPassword1" className="col-lg-2 col-sm-2 control-label">Description</label>
                                    <div className="col-lg-10">
                                        <textarea ref="description" className="form-control" id="description" placeholder="Description here..."></textarea>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-lg-offset-2 col-lg-10">
                                        <button type="button" className="btn btn-danger" onClick={this.createRoom.bind(this)}>Submit</button>
                                    </div>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
