// eslint-disable-next-line import/no-cycle
import AddedRenderer from './AddedRenderer';
import RemovedRenderer from './RemovedRenderer';
// eslint-disable-next-line import/no-cycle
import ChangedRenderer from './ChangedRenderer';
import CommonRenderer from './CommonRenderer';
// eslint-disable-next-line import/no-cycle
import NestedRenderer from './NestedRenderer';

const renderers = {
  AddedItem(item) { return new AddedRenderer(item); },
  NestedItem(item) { return new NestedRenderer(item); },
  RemovedItem(item) { return new RemovedRenderer(item); },
  CommonItem(item) { return new CommonRenderer(item); },
  ChangedItem(item) { return new ChangedRenderer(item); },
};

export default renderers;