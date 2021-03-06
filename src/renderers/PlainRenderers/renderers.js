/* eslint-disable import/no-cycle */
import AddedRenderer from './AddedRenderer';
import RemovedRenderer from './RemovedRenderer';
import ChangedRenderer from './ChangedRenderer';
import CommonRenderer from './CommonRenderer';
import NestedRenderer from './NestedRenderer';

const renderers = {
  AddedItem: item => new AddedRenderer(item),
  RemovedItem: item => new RemovedRenderer(item),
  ChangedItem: item => new ChangedRenderer(item),
  CommonItem: item => new CommonRenderer(item),
  NestedItem: item => new NestedRenderer(item),
};

export default renderers;
