<template>
  <a-layout class="h-full">
    <a-layout-header class="header bg-[#001529]">
      <div class="logo flex w-full">
        <img src="https://jit.nu/wp-content/uploads/2019/01/logo-JITS.png" class="h-[64px] w-[64px]" alt="logo">
        <div class="flex justify-center w-full"><div class=""><span class="font-bold text-white">This is header banner</span></div></div>
      </div>
    </a-layout-header>
    <a-layout-content style="padding: 0">
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider style="background: #fff">
          <a-menu
          v-model:openKeys="openKeys"
          v-model:selectedKeys="selectedKeys"
          mode="vertical"
          :items="items"
          @click="handleClick"
        />
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <a-form
          :label-col="{ span: 5 }"
          :wrapper-col="wrapperCol"
          layout="horizontal"
        >
          <div class="grid grid-cols-3 space-x-4">
              <div class="">            
                <a-form-item label="Request No">
                <a-input />
              </a-form-item>
              <a-form-item label="Debit account">
                <a-input />
              </a-form-item>
              <a-form-item label="Status">
                <a-select>
                  <a-select-option value="demo">Demo</a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="Upload">
                <a-upload action="/upload.do" list-type="picture-card">
                  <div>
                    <div style="margin-top: 8px">Upload</div>
                  </div>
                </a-upload>
              </a-form-item></div>
              <div class="">
                <a-form-item label="Request Time">
                  <a-input />
                </a-form-item>
                <a-form-item label="Approval date">
                  <a-input />
                </a-form-item>
              </div>
              <div class="">
                <a-button>Search</a-button>

              </div>
          </div>
  </a-form>
            <a-table :columns="columns" :data-source="dataSource" :pagination="pagination"
            @change="handleTableChange" :loading="loading">
            </a-table>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer class="p-0 justify-center">
      <div class="grid grid-cols-4 h-full bg-[#001529]">
        <div class="col-span-3 flex place-content-center items-center">
          <span class="font-bold text-white">This is the footer</span>
        </div>
        <div class=" flex items-center place-content-center">
          <span class="font-bold text-white">Version 1.1.1</span>
        </div>
      </div>
    </a-layout-footer>
  </a-layout>
</template>
<script>
import { ref, computed, reactive, h  } from 'vue';
import { usePagination } from 'vue-request';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';
const selectedKeys = ref([]);
const openKeys = ref([]);
const items = ref([
  {
    key: '1',
    icon: () => h(MailOutlined),
    label: 'Home',
    title: 'Home',
  },
  {
    key: '2',
    icon: () => h(CalendarOutlined),
    label: 'Contract',
    title: 'Contract',
    children: [
      {
        key: 'contract-list',
        label: 'Contract list',
        title: 'Contract list',
      },
      {
        key: 'create-contract',
        label: 'Create new contract',
        title: 'Create new contract',
      },
      {
        key: 'approve-contract',
        label: 'Approve contract',
        title: 'Approve contract',
      },
      {
        key: 'approve-user',
        label: 'Approve user',
        title: 'Approve user',
      },
      {
        key: 'unblock-user',
        label: 'Unblock user',
        title: 'Unblock user',
      },
      {
        key: 'reset-password',
        label: 'Reset pin/ password',
        title: 'Reset pin/ password',
      },
      ]
  },
  {
    key: 'sub1',
    icon: () => h(AppstoreOutlined),
    label: 'Fee management',
    title: 'Fee management',
    children: [
      {
        key: '3',
        label: 'Set fee',
        title: 'Set fee',
      },
      {
        key: '4',
        label: 'Transaction fee',
        title: 'Transaction fee',
        children: [
          {
            key: '5',
            label: 'Product fee',
            title: 'Product fee',
          },
          {
            key: '6',
            label: 'Contract fee',
            title: 'Contract fee',
          },
          {
            key: '6',
            label: 'OTC fee',
            title: 'OTC fee',
          },
        ],
      },
      {
        key: 'sub1-2',
        label: 'Set fee share',
        title: 'Set fee share',
      },
    ],
  },
  {
    key: 'limit-management',
    icon: () => h(SettingOutlined),
    label: 'Limit management',
    title: 'Limit management',
    children: [
      {
        key: '8',
        label: 'Product limit',
        title: 'Product limit',
      },
      {
        key: '9',
        label: 'Contract limit',
        title: 'Contract limit',
      },
      {
        key: '10',
        label: 'Wallet balance limit',
        title: 'Wallet balance limit',
      },
    ],
  },
  {
    key: 'transaction',
    icon: () => h(SettingOutlined),
    label: 'Transaction',
    title: 'Transaction',
    children: [
      {
        key: '8',
        label: 'Transaction history',
        title: 'Transaction history',
      },
      {
        key: '9',
        label: 'Top Up to E-wallet',
        title: 'Top Up to E-wallet',
      },
      {
        key: '10',
        label: 'Withdrawal from E-wallet',
        title: 'Withdrawal from E-wallet',
      },
      {
        key: '11',
        label: 'Cash back ',
        title: 'Cash back ',
      },
      {
        key: '12',
        label: 'Payroll ',
        title: 'Payroll ',
      },
      {
        key: '13',
        label: 'Admin transaction',
        title: 'Admin transaction',
      },
      {
        key: '14',
        label: 'Reversal transaction',
        title: 'Reversal transaction',
      },
    ],
  },
  {
    key: 'system',
    icon: () => h(SettingOutlined),
    label: 'System',
    title: 'System',
    children: [
      {
        key: 'grm',
        label: 'Group management',
        title: 'Group management',
      },
      {
        key: 'um',
        label: 'User management',
        title: 'User management',
      },
      {
        key: 'sm',
        label: 'System parameter',
        title: 'System parameter',
      },
    ],
  },
  {
    key: 'report',
    icon: () => h(SettingOutlined),
    label: 'Report',
    title: 'Report',
    children: [
      {
        key: 'rpl',
        label: 'Report list',
        title: 'Report list',
      },
    ]
  }
]);
const handleClick = menuInfo => {
  console.log('click ', menuInfo);
};
const selectedKeys1 = ref(['2']);
const selectedKeys2 = ref(['1']);
const wrapperCol = {
  span: 14,
};
const checked = ref(false);
const columns = ref([
  {
    name: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    name: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    name: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Phone number',
    key: 'phone_number',
    dataIndex: 'phone_number',
  },
  {
    title: 'Subcription',
    key: 'action',
  },
]);
const data = ref([
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]);

export default{ 
  setup(props) {
    let dataTable = ref([])
    const err = ref([])
    const fetchData = async() =>{
      const response = await fetch("https://random-data-api.com/api/users/random_user?size=20");
      dataTable = await response.json()
    }
    fetchData();
    const {
    data: dataSource,
    run,
    loading,
    current,
    pageSize,
    } = usePagination(fetchData, {
    formatResult: res => res.data.results,
    pagination: {
      currentKey: 'page',
      pageSizeKey: 'results',
    },
  });
    const pagination = computed(() => ({
    total: 200,
    current: current.value,
    pageSize: pageSize.value,
    }));
    const handleTableChange = (pag, filters, sorter) => {
    run({
    results: pag.pageSize,
    page: pag?.current,
    sortField: sorter.field,
    sortOrder: sorter.order,
    ...filters,
   });
};
    return{
      selectedKeys2, selectedKeys1, openKeys,items, data, columns,dataTable, pagination, dataSource, handleTableChange, loading
    }
  }
}
</script>
<style scoped>
#components-layout-demo-top-side .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side .logo {
  float: right;
  margin: 16px 0 16px 24px;
}
.ant-layout-footer {
  padding: 0px !important;
  height: 50px;
}

.site-layout-background {
  background: #fff;
}
.ant-layout-has-sider{
  height: 100%;
}
.ant-menu-vertical >.ant-menu-item{
  text-align: initial;
}
</style>