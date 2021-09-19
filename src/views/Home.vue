<template>
  <t-tag tag-name="div"
         class="max-w-screen-lg m-auto">
    <t-tag tag-name="h3"
           class="flex justify-center my-8 mb-16 text-4xl text-blue-900 font-extrabold">Dance Studios Directory</t-tag>

    <t-tag tag-name="div"
           class="flex max-w-screen-md m-auto my-8 justify-between">
      <t-input class="min-w-50 mr-8"
               name="search"
               placeholder="Search by city, dance form, studios or zip code..."
               v-model="filter"></t-input>
      <t-rich-select name="select"
                     placeholder="Select a city..."
                     v-model="selectedCity"
                     :options="optionsCity"></t-rich-select>
    </t-tag>

    <t-tag tag-name="div"
           class="my-8">
      <t-table :headers="tableHeaders"
               :data="tableData"></t-table>

      <t-pagination class="my-8 bg-gradient-to-l from-yellow-200 to-red-300"
                    :total-items="paginationTotalRows"
                    :per-page="paginationLimitRows"
                    v-model="currentPage"></t-pagination>
    </t-tag>
  </t-tag>
</template>

<script>
import tableDataJson from '@/static/tableData.json';

export default {
  name: 'Home',
  data() {
    return {
      currentPage: 1,
      filter: '',
      optionsCity: ['Nantes', 'Paris'],
      paginationLimitRows: 10,
      selectedCity: '',
      tableHeaders: ['Studio Name', 'Dance Forms', 'Website', 'Phone Number', 'City', 'Zip Code', 'Address']
    }
  },
  computed: {
    paginationTotalRows() {
      return tableDataJson.length;
    },
    tableData() {
      return tableDataJson.filter((row) => {
        const searchTerm = this.filter.toLowerCase();

        if (!searchTerm) {
          return true
        }

        const rowKeys = Object.keys(row);

        for (const rowKey of rowKeys) {
          const rowValue = row[rowKey].toString().toLowerCase();

          if (rowValue.includes(searchTerm)) {
            return true
          }
        }        
      }).filter((row) => {
        const filteredCity = this.selectedCity.toLowerCase();

        if (!filteredCity) {
          return true
        }

        const rowCity = row.City.toLowerCase();

        if (rowCity.includes(filteredCity)) {
          return true
        }
      }).filter((row, rowIndex) => {
        const startRowIndex = (this.currentPage - 1) * this.paginationLimitRows;
        const endRowIndex = this.currentPage * this.paginationLimitRows;

        return rowIndex >= startRowIndex && rowIndex < endRowIndex
      })
    }
  },
}
</script>
