import CompC from './C.js'
import CompD from './D.js'

const A = {
  template: `
    <div>
      <h1>component A</h1>
      <CompC></CompC>
      <CompD></CompD>
    </div>
  `,

  components: {
    CompC,
    CompD
  }
}

export default A