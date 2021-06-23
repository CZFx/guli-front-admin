<template>
  <div class="app-container">
    <el-input v-model="filterText" placeholder="请输入关键字" style="margin-bottom:30px;" />

    <el-tree
      ref="tree2"
      :data="subjectList"
      :props="defaultProps"
      :filter-node-method="filterNode"
      class="filter-tree"
      default-expand-all
    />
  </div>
</template>

<script>
import subject from '@/api/edu/subject';
export default {
  data() {
    return {
      filterText: "",
      subjectList: [],
      defaultProps: {
        children: "children",
        label: "title"
      }
    };
  },
  created() {
    this.getSubjectList();
  },
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val);
    }
  },

  methods: {
    getSubjectList() {
      subject.getSubjectList()
        .then(res => {
          this.subjectList = res.data.list
        })
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.title.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    }
  }
};
</script>

