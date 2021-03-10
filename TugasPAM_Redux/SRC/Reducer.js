import Types from './Types'

const initialState = {
    count: 0
}

export default function Reducer(
    state = initialState,
    action
) {
    switch (action.type) {
        case Types.TAMBAH:
            return { count: state.count + 1 }
        case Types.KURANG:
            return { count: state.count - 1 }
        default:
            return state
    }

}