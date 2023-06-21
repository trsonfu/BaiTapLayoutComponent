import React, { Component } from 'react'

export default class ThongTin extends Component {
  hienThiHinhAnh () {
    return 'https://i.pravatar.cc/300?u=' + Math.random();
  }
  render() {
    let hoTen = 'Luong Son Ba';
    let ngaySinh = '09/05/1989';
    return <div>
      <img src={this.hienThiHinhAnh()}></img>
    </div>
  }
}
