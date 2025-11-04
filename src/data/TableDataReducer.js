function TableDataReducer(state, action) {
  switch (action.type) {
    case 'SET_DATA':
      // Zapisz oryginalne dane
      return {
        data: action.payload,
        originalData: action.payload,
        sortConfig: { column: null, direction: 'natural' }
      };

    case 'SORT_ASC':
      return {
        ...state,
        data: [...state.data].sort((a, b) => {
          let aValue, bValue;
          
          switch (action.column) {
            case 'user':
              aValue = a.user?.name || '';
              bValue = b.user?.name || '';
              break;
            case 'post':
              aValue = a.post.title || '';
              bValue = b.post.title || '';
              break;
            case 'comments':
              aValue = a.comments.length;
              bValue = b.comments.length;
              break;
            default:
              return 0;
          }
          
          if (typeof aValue === 'string') {
            return aValue.localeCompare(bValue);
          }
          return aValue - bValue;
        }),
        sortConfig: { column: action.column, direction: 'asc' }
      };

    case 'SORT_DESC':
      return {
        ...state,
        data: [...state.data].sort((a, b) => {
          let aValue, bValue;
          
          switch (action.column) {
            case 'user':
              aValue = a.user?.name || '';
              bValue = b.user?.name || '';
              break;
            case 'post':
              aValue = a.post.title || '';
              bValue = b.post.title || '';
              break;
            case 'comments':
              aValue = a.comments.length;
              bValue = b.comments.length;
              break;
            default:
              return 0;
          }
          
          if (typeof aValue === 'string') {
            return bValue.localeCompare(aValue);
          }
          return bValue - aValue;
        }),
        sortConfig: { column: action.column, direction: 'desc' }
      };

    case 'SORT_NATURAL':
      // Powrót do oryginalnej kolejności
      return {
        ...state,
        data: state.originalData,
        sortConfig: { column: null, direction: 'natural' }
      };

    default:
      return state;
  }
}

export default TableDataReducer;
