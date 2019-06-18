import {connect} from 'react-redux'
import {addNewProduct} from '../../store'
import ProductForm from './Form'

const mapDispatchToProps = {handleSubmit: addNewProduct}

export default connect(null, mapDispatchToProps)(ProductForm)
