import { PartType } from '@/data/parts';
import {
  ref, computed, onMounted, Ref,
} from 'vue';

type Filter = {
  type: string
}

function filterResults(results: Ref<PartType[]>, filters: Ref<Filter[]>) {
  return results.value.filter((part: PartType) => filters.value.every(
    (filter: Filter) => part.type === filter.type,
  ));
}

export default function useFilters(searchResults: Ref<PartType[]>) {
  const filters = ref([] as Filter[]);

  const applyFilters = (filter: Filter) => filters.value.push(filter);
  const clearFilters = () => { filters.value = []; };

  onMounted(() => console.log('Mounted: useFilters'));
  const filteredResults = computed(() => filterResults(searchResults, filters));

  return {
    filters,
    applyFilters,
    clearFilters,
    filteredResults,
  };
}
