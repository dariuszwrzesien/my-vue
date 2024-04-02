import { PartType } from '@/data/parts';
import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';

type Robot = {
  head: PartType | null,
  leftArm: PartType | null,
  torso: PartType | null,
  rightArm: PartType | null,
  base: PartType | null,
}

type CartItem = Robot & {totalCost: number}

export interface State {
    cart: CartItem[];
}

export const key: InjectionKey<Store<State>> = Symbol('vuex-state-key');

export const store = createStore<State>({
  state: {
    cart: [],
  },
  mutations: {
    addRobotToCart(state, robot: CartItem) {
      state.cart.push(robot);
    },
  },
  getters: {
    cartSaleItems(state) {
      console.log('state.cart', state.cart);
      return state.cart.filter((item) => item.head?.onSale);
    },
  },
});
