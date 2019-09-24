import {connect} from 'react-redux'
import {editProduct} from '../../store'
import ProductForm from './Form'

// const mapDispatchToProps = { handleSubmit: updatePost };

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleSubmit: formState => dispatch(editProduct(formState, ownProps.id))
  }
}

export default connect(null, mapDispatchToProps)(ProductForm)
