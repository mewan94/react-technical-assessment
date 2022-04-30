import Axios from 'axios'
import { formatMetaData } from '../../libs/common'

export async function fetchFormMetaData() {
  try {
    const res: any = await Axios.get('https://ansible-template-engine.herokuapp.com/form')
    if(res.status === 200){
      return formatMetaData(res.data)
    } else {
      return []
    }
  } catch (error) {
    return []
  }
}
