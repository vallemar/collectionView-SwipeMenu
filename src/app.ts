import { createApp } from 'nativescript-vue';
import Home from './components/Home.vue';
import  CollectionView  from '@nativescript-community/ui-collectionview/vue3';
import  SwipeMenuPlugin  from '@nativescript-community/ui-collectionview-swipemenu/vue3';

createApp(Home).use(CollectionView).use(SwipeMenuPlugin).start();
