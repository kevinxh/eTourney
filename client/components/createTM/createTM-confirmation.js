import { Button, Panel, Col, Row, Clearfix, Grid } from 'react-bootstrap';
import React, { Component } from 'react';

export default class TMconfirmation extends React.Component {
  render() {
    return (
      <div className="center">
        <div >
          <table className="cftable">
            <tbody>
              <tr className="noBorder">
                <td className="cftitle">比赛信息</td>
                <td className="cfcol"><table className="table">
                  <tbody>
                    <tr>
                      <div className="cfsubject">比赛名</div>
                    </tr>
                    <tr>
                      <div className="cfcontent">第六十九届奥林匹克运动会</div>
                    </tr>
                    <tr>
                      <div className="cfsubject">比赛名日期</div>
                    </tr>
                    <tr>
                      <div className="cfcontent">2016/09/09 6:57pm</div>
                    </tr>
                  </tbody>
                </table></td>
              </tr>
              <hr className="cfdivider" ></hr>
              <tr className="dividerBorder">
                <td className="cftitle">比赛设置</td>
                <td className="cfcol"><table className="table">
                  <tbody>
                    <tr>
                      <div className="cfsubject">是否公开注册</div>
                    </tr>
                    <tr>
                      <div className="cfcontent">是</div>
                    </tr>
                    <tr>
                      <div className="cfsubject">游戏地图</div>
                    </tr>
                    <tr>
                      <div className="cfcontent">巴拉巴拉</div>
                    </tr>
                  </tbody>
                </table></td>
                <td className="cfcol"><table className="table">
                  <tbody>
                    <tr>
                      <div className="cfsubject">注册类型</div>
                    </tr>
                    <tr>
                      <div className="cfcontent">免费</div>
                    </tr>
                    <tr>
                      <div className="cfsubject">游戏模式</div>
                    </tr>
                    <tr>
                      <div className="cfcontent">随机</div>
                    </tr>
                  </tbody>
                </table></td>
              <td className="cfcol"><table className="table">
                  <tbody>
                    <tr>
                      <div className="cfsubject">排队长度</div>
                    </tr>
                    <tr>
                      <div className="cfcontent">10</div>
                    </tr>
                    <tr>
                      <div className="cfsubject">地区</div>
                    </tr>
                    <tr>
                      <div className="cfcontent">中国大陆</div>
                    </tr>
                  </tbody>
                </table></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
