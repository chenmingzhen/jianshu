import Mock from 'mockjs';
import {headerList as header} from './header';

Mock.mock(/\/header/,'get',header);
