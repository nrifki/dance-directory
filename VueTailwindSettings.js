import {
    TInput,
    TButton,
    TRichSelect,
    TPagination,
    TTag,
    TTable,
  } from 'vue-tailwind/dist/components';

const VueTailwindSettings = {
    't-input': {
      component: TInput
    },
    't-button': {
      component: TButton
    },
    't-rich-select': {
      component: TRichSelect
    },
    't-pagination': {
      component: TPagination
    },
    't-tag': {
      component: TTag
    },
    't-table': {
      component: TTable,
      props: {
        fixedClasses: {
          table: 'min-w-0 block overflow-x-auto whitespace-nowrap',
          td: 'max-w-xs overflow-scroll',
          theadTh: 'bg-gradient-to-r from-yellow-200 via-red-300 to-yellow-200',
        }
      }
    }
  };

  export default VueTailwindSettings;