import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Pipe, PipeTransform} from '@angular/core';

// 引入所有自定义的管道文件
import {WelcomePipe} from './welcomePipe';



@NgModule({
  declarations: [
    WelcomePipe,
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
  // 若管道要在其他模块中使用就必须把管道导出，否则只能在当前组件中使用
  exports: [
    WelcomePipe,
  ]
})
export class AllPipes {
}
