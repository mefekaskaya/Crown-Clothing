import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsFetching } from "../../redux/selectors/shop";
import WithSpinner from "../withSpinner/WithSpinner";
import CollectionOverview from "./CollectionOverview.jsx";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
