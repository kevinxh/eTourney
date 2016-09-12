import React, { Component } from 'react'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Grid from 'react-bootstrap/lib/Grid'
import Thumbnail from 'react-bootstrap/lib/Thumbnail'
import ResponsiveEmbed from 'react-bootstrap/lib/ResponsiveEmbed'

export default class HotDisplay extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} md={9}>
              <Thumbnail>
                <ResponsiveEmbed a16by9>
                  <embed src="http://files.softicons.com/download/game-icons/super-mario-icons-by-sandro-pereira/preview.png" />
                </ResponsiveEmbed>
                <h3>{this.props.tournament}</h3>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
