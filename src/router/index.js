import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '@/pages/MainPage';
import NotFoundPage from "@/pages/NotFoundPage";
import NotesPage from "@/pages/NotesPage";
import LabelsPage from "@/pages/LabelsPage";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'MainPage',
            component: MainPage,
        },
        {
            path: '/notes',
            name: 'NotesPage',
            component: NotesPage,
        },
        {
            path: '/labels',
            name: 'LabelsPage',
            component: LabelsPage,
        },
        {
            path: '*',
            name: 'NotFoundPage',
            component: NotFoundPage,
        },
    ],
});
