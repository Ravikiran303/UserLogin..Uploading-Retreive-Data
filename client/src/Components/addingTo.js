import React, { Component } from 'react';
import { threads} from './UserFunctions';


export class addingTo extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
          title: '',
          description:'',
          tags:'',
          email:''
        }

        //const {mail} = this.props.match.params.email;
       // console.log(this.props.match.params.email);
       console.log(this.props.location.email);
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }
      onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit (e) {
        e.preventDefault();
        const addTags = {
            email:this.props.location.email,
            title:this.state.title,
            description:this.state.description,
            tags:this.state.tags
        }
        threads(addTags).then(res => {
                if(res){
                    console.log('gujhgjujhui',res);
                    this.props.history.push('/profile');
                }
                else{
                    console.log('fyghuijhnkio',res);
                }
            });
        
    }
  render() {

    return (
        <div className="container">
        <div className="row">
            <div className="col-md-6 mt-5 mx-auto">
                <form noValidate onSubmit={this.onSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">New Thread</h1>
                    
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text"
                            className="form-control"
                            name="title"
                            placeholder="Enter Title"
                            value={this.state.title}
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">description</label>
                        <input type="text"
                            className="form-control"
                            name="description"
                            placeholder="Enter description"
                            value={this.state.description}
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">tags</label>
                        <input type="text"
                            className="form-control"
                            name="tags"
                            placeholder="Enter tags"
                            value={this.state.tags}
                            onChange={this.onChange} />
                    </div>
                    <button type="submit" className="btn btn-lg btn-primary btn-block">
                        Create
                    </button>
                </form>
            </div>
        </div>
    </div>
    )
  }
}

export default addingTo
