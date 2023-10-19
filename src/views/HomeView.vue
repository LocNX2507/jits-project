<template>
  <a-layout class="h-full">
    <a-layout-header class="header bg-[#001529]">
      <div class="logo flex w-full">
        <img src="https://jit.nu/wp-content/uploads/2019/01/logo-JITS.png" class="h-[64px] w-[64px]" alt="logo">
        <div class="flex justify-center w-full"><div class=""><span class="font-bold text-white">This is header banner</span></div></div>
      </div>
    </a-layout-header>
    <a-layout-content style="padding: 0">
      <a-layout style="padding: 0; background: #fff">
        <a-layout-sider style="background: #fff">
          <a-menu
          v-model:openKeys="openKeys"
          v-model:selectedKeys="selectedKeys"
          :items="items"
        />
        </a-layout-sider>
        <a-layout-content class="overflow-y-auto">
          <a-form
          :label-col="{ span: 5 }"
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
          <a-table :columns="columns" :data-source="dataTable" :pagination="pagination"
          @change="handleTableChange" :loading="loading"
          class="relative"
          >
          </a-table>
          <a-carousel :after-change="onChange">
            <div><h3>Advertise 1</h3></div>
            <div><h3>Advertise 2</h3></div>
            <div><h3>Advertise 3</h3></div>
            <div><h3>Advertise 4</h3></div>
          </a-carousel>
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
import { ref, computed  } from 'vue';
import { usePagination } from 'vue-request';
const onChange = current => {
  console.log(current);
};
const selectedKeys = ref([]);
const openKeys = ref([]);
const items = ref([
  {
    key: '1',
    label: 'Home',
    title: 'Home',
  },
  {
    key: '2',
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
const columns = ref([
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Password',
    dataIndex: 'password',
    key: 'password',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Age',
    dataIndex: 'date_of_birth',
    key: 'date_of_birth',
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
    title: 'Status',
    key: 'subscription',
    dataIndex: 'subscription',

  },
]);
let dataTable = ref([
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    phone_number:'43895345349509345',
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    subcription:'Subcription'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    phone_number:'43895345349509345',
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
    subcription:'Subcription'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    phone_number:'43895345349509345',
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    subcription:'Subcription'
  },
]);
export default{ 
  setup(props) {
    const fetchData = async() =>{
      const response = await fetch("https://random-data-api.com/api/users/random_user?size=20");
      dataTable.value = await response.json()
       dataTable.value.forEach((item) => {
        item.name = item.first_name + ' ' + item.last_name
        item.address = item.address.city + item.address.street_name + item.address.street_address + item.address.country
        item.credit_card = item.credit_card.cc_number
        item.subscription = item.subscription.status
      })
       console.log(dataTable);
    }




















    
    const {data: dataSource,run,loading,current,pageSize,} = usePagination(fetchData, {
    formatResult: res => res.data.results,
    pagination: {currentKey: 'page',pageSizeKey: 'results',},
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
      selectedKeys, openKeys,items, columns,dataTable, pagination, handleTableChange, loading
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
:deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: black;
  overflow: hidden;
}

:deep(.slick-slide h3) {
  color: #fff;
}
</style>