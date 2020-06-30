import Mock from 'mockjs';
import {headerList as header} from './header';
import {home} from './home';

Mock.mock(/\/header/,'get',header);
Mock.mock(/\/home/,'get',home);
