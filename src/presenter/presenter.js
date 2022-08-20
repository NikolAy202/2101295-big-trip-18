import HeaderInfoView from '../view/header-view.js';
import FiltersView from '../view/filters-view.js';
import SortView from '../view/sorting-view.js';
import RouteListView from '../view/route-points-list-view.js';
import RouteEditorView from '../view/editing-form-view.js';
import RoutePointView from '../view/route-point-view.js';
import {render} from '../render.js';
import { RenderPosition } from '../render.js';

const headerInfoElement = document.querySelector('.trip-main');
const filterElement = document.querySelector('.trip-controls__filters');
const sortElement = document.querySelector('.trip-events');

export default class BoardPresenter {
  routeListComponent = new RouteListView();

  init = () => {
    render(new FiltersView(), filterElement, RenderPosition.AFTERBEGIN);
    render(new HeaderInfoView(), headerInfoElement, RenderPosition.AFTERBEGIN);
    render(this.routeListComponent, sortElement);
    render(new SortView(), sortElement, RenderPosition.AFTERBEGIN);
    render(new RouteEditorView(), this.routeListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new RoutePointView(), this.routeListComponent.getElement());
    }
  };
}
