import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home/Home.vue';
import ProductList from '../views/product/ProductList.vue';
import BoardList from '../views/board/BoardList.vue';
import QnaList from '../views/qna/QnaList.vue';
import DataList from '../views/dataroom/DataList.vue';
import Contact from '../views/contact/Contact.vue';
import MemberList from '../views/member/MemberList.vue';
import MemberDetail from '../views/member/MemberDetail.vue';
import MyPage from '../views/member/MyPage.vue';
import Join from '../views/member/Join.vue';
import Login from '../views/member/LoginPage.vue';
import ProductDetail from '../views/product/ProductDetail.vue';
import ProductInsert from '../views/product/ProductInsert.vue';
import ProductUpdate from '../views/product/ProductUpdate.vue';
import BoardDetail from '../views/board/BoardDetail.vue';
import BoardInsert from '../views/board/BoardInsert.vue';
import BoardUpdate from '../views/board/BoardUpdate.vue';
import QnaDetail from '../views/qna/QnaDetail.vue';
import QnaInsert from '../views/qna/QnaInsert.vue';
import QnaUpdate from '../views/qna/QnaUpdate.vue';
import DataDetail from '../views/dataroom/DataDetail.vue';
import DataInsert from '../views/dataroom/DataInsert.vue';
import DataUpdate from '../views/dataroom/DataUpdate.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/products', name: 'ProductList', component: ProductList },
  { path: '/products/detail/:id', name: 'ProductDetail', component: ProductDetail, props: true },
  { path: '/products/insert', name: 'ProductInsert', component: ProductInsert },
  { path: '/products/update/:id', name: 'ProductUpdate', component: ProductUpdate, props: true },
  { path: '/boards', name: 'BoardList', component: BoardList },
  { path: '/boards/detail/:id', name: 'BoardDetail', component: BoardDetail, props: true },
  { path: '/boards/insert', name: 'BoardInsert', component: BoardInsert },
  { path: '/boards/update/:id', name: 'BoardUpdate', component: BoardUpdate, props: true },
  { path: '/qnas', name: 'QnaList', component: QnaList },
  { path: '/qnas/detail/:id', name: 'QnaDetail', component: QnaDetail, props: true },
  { path: '/qnas/insert', name: 'QnaInsert', component: QnaInsert },
  { path: '/qnas/update/:id', name: 'QnaUpdate', component: QnaUpdate, props: true },
  { path: '/datarooms', name: 'DataList', component: DataList },
  { path: '/datarooms/detail/:id', name: 'DataDetail', component: DataDetail, props: true },
  { path: '/datarooms/upload', name: 'DataInsert', component: DataInsert },
  { path: '/datarooms/update/:id', name: 'DataUpdate', component: DataUpdate, props: true },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/members/list', name: 'MemberList', component: MemberList },
  { path: '/members/detail/:id', name: 'MemberDetail', component: MemberDetail, props: true },
  { path: '/members/mypage/:id', name: 'MyPage', component: MyPage, props: true },
  { path: '/members/join', name: 'Join', component: Join },
  { path: '/members/login', name: 'Login', component: Login },
  { path: '/members/logout', name: 'Logout', beforeEnter: (to, from, next) => {
    // 로그아웃 처리 로직
    next({ name: 'Login' });
  }},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
