<template>
    <h1 class="text-center text-info my-5">My Orders</h1>
    <div class="accordion" id="accordionExample">
      <div
        class="accordion-item"
        v-for="(order, index) in orders"
        :key="order._id"
      >
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button rounded-0"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#collapse' + order._id"
            aria-expanded="true"
            :aria-controls="'collapse' + order._id"
          >
            Order Id {{order._id}} | 
            Total => &nbsp;&nbsp;<span class="text-info"> {{order.total}} </span>
          </button>
        </h2>
        <div
          :id="'collapse' + order._id"
          class="accordion-collapse collapse"
          :class="{ show: index === 0 }"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <table class="table table-bordered">
              <thead>
                <tr class="bg-dark text-white">
                  <th>No</th>
                  <th>Name</th>
                  <!-- <th>Image</th> -->
                  <th>Price</th>
                  <th>Count</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(product, index) in order.items"
                  :key="product._id"
                >
                  <td>{{ index + 1 }}</td>
                  <td>{{ product.name }}</td>
                  <!-- <td>
                    <img
                    :src="assetUrl + product.images.toString().split(',')[0]"
                    alt=""
                    style="width: 50px; height: 50px"
                  />
                  </td> -->
                  <td>{{ product.price }}</td>
                  <td>{{ product.count }}</td>
                  <td>{{ product.price * product.count }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        orders: [],
        assetUrl: this.$assetUrl,
      };
    },
    methods: {
      async loadOrder(token) {
        let response = await fetch(this.$baseUrl + "orders/my", {
          method: "get",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        let responseData = await response.json();
        if (responseData.con) {
          //console.log(responseData.data);
          this.orders = responseData.result;
        } else {
          this.orders = [];
        }
      },
    },
    beforeMount() {
      let token = localStorage.getItem("token");
      if (token) {
        this.loadOrder(token);
      } else {
        this.$router.push({ name: "Login" });
      }
    },
  };
  </script>