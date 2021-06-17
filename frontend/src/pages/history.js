import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import ApiService from '../services/api.service'

class History extends Component {

    constructor(props) {
        super(props);
        this.state = {
            commits: [],
            loading: true,
        }
    }

    componentDidMount() {
        this.getHistory();
    }

    async getHistory() {
        this.setState({
            loading: true
        })
        const response = await ApiService.getAll();
        console.log(response.data)
        this.setState({
            commits: response.data,
            loading: false
        })
    }



    render(){
        return (
            <Container className="container-fluid">
                <h1 className="header">Commits history</h1>
                <h2 className="header"><a href="https://github.com/arredgroup/gitapi-node-react-docker">Challenge repository</a></h2>
                <Row>
                    {this.state.commits.map((val, i) => {
                        return (
                            <Col key={i}>
                                <Card>
                                    <div className="card-body">
                                        <h5 className="card-title">{val.commit.message}</h5>
                                        <p className="card-text">
                                            <Table>
                                                <tr>
                                                    <th>Author</th>
                                                    <td><img src={val.committer.avatar_url} width="40" className="rounded-circle"/><a href={"mailto:"+ val.commit.author.email}>{ val.commit.author.name }</a></td>
                                                </tr>
                                                <tr>
                                                    <th>Date</th>
                                                    <td>{new Date(val.commit.author.date).toLocaleString() }</td>
                                                </tr>
                                                <tr>
                                                    <th>Url</th>
                                                    <td><a href={val.commit.url}>{val.sha.length > 10 ?
                                                        val.sha.substring(0, 10 - 3) + "..." :
                                                        val.sha}</a></td>
                                                </tr>
                                            </Table>
                                        </p>
                                    </div>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
                { (this.state.loading)?
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: 100+ "%"}}></div>
                    </div> : null }
            </Container>
        )
    }
}

export default History;