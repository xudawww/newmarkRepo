<template>
  <div class="card">
    <DataView
      v-show="!getLoading"
      :value="products"
      :layout="layout"
      :paginator="true"
      :rows="rows"
      :sortField="sortField"
      @page="onLoadProductPage($event)"
    >
      <!-- <template #header>
        <div class="grid grid-nogutter">
          <div class="col-6" style="text-align: left"></div>
        </div>
      </template> -->

      <!-- <template #list="slotProps">
        <div class="col-12">
          <div class="product-list-item">
            <img
              src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
              :alt="slotProps.data.name"
            />
            <div class="product-list-detail">
              <div class="product-name">{{ slotProps.data.name }}</div>
              <div class="product-description">
                {{ slotProps.data.description }}
              </div>
              <Rating
                :modelValue="slotProps.data.rating"
                :readonly="true"
                :cancel="false"
              ></Rating>
              <i class="pi pi-tag product-category-icon"></i
              ><span class="product-category">{{
                slotProps.data.category
              }}</span>
            </div>
            <div class="product-list-action">
              <span class="product-price">${{ slotProps.data.price }}</span>
              <Button
                icon="pi pi-shopping-cart"
                label="Add to Cart"
                :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"
              ></Button>
              <span
                :class="
                  'product-badge status-' +
                  slotProps.data.inventoryStatus.toLowerCase()
                "
                >{{ slotProps.data.inventoryStatus }}</span
              >
            </div>
          </div>
        </div>
      </template> -->

      <template #grid="slotProps">
        <div :class="'col-' + col">
          <div class="product-grid-item card">
            <div class="product-grid-item-top">
              <div>
                <i class="pi pi-tag product-category-icon"></i>
                <span class="product-category">{{ slotProps.data.id }}</span>
              </div>
              <span :class="'product-badge status-'">可购买</span>
            </div>
            <div class="product-grid-item-content">
              <img :src="slotProps.data.img_url" :alt="slotProps.name" />
              <div class="product-name">{{ slotProps.data.name }}</div>
              <div class="product-description">
                {{ slotProps.data.description }}
              </div>
              <Rating modelValue="1" :readonly="true" :cancel="false"></Rating>
            </div>
            <div class="product-grid-item-bottom">
              <span class="product-price">${{ slotProps.data.price }}</span>
              <Button icon="pi pi-shopping-cart"></Button>
            </div>
          </div>
        </div>
      </template>
    </DataView>
    <DataView
      v-show="getLoading"
      :value="skeletonCardsArray"
      :layout="layout"
      :rows="rows"
      ><template #grid="">
        <div :class="'col-' + col">
          <div class="product-grid-item card">
            <div class="product-grid-item-top">
              <div>
                <span class="product-category"
                  ><Skeleton width="40px" height="2rem"
                /></span>
              </div>
            </div>

            <div class="product-grid-item-content">
              <br />
              <Skeleton id="imgSkeleton" />
            </div>
            <br />
            <div class="product-grid-item-bottom">
              <Skeleton width="100%" height="2rem" />
            </div>
            <br />
            <div class="product-grid-item-bottom">
              <Skeleton width="100%" height="2rem" />
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProductService from "./service/ProductService";
import Skeleton from "primevue/skeleton";
import $ from "jquery";
export default {
  data() {
    return {
      products: [],
      layout: "grid",
      rows: 12,
      col: 2,
      page: 0,
      sortKey: null,
      sortField: null,
      skeletonCardsArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      sortOptions: [
        { label: "Price High to Low", value: "!price" },
        { label: "Price Low to High", value: "price" },
      ],
    };
  },
  productService: null,
  components: {},
  computed: {
    ...mapGetters("product", ["getHouses", "getHasNext", "getLoading"]),
  },
  methods: {
    resizeWidth(e) {
      let width = document.documentElement.clientWidth;
      console.log(width);
      if (width >= 1300) {
        this.col = 2;
      } else if (width > 984 && width < 1300) {
        this.col = 3;
      } else if (width > 768 && width < 984) {
        this.col = 4;
      } else if (width > 576 && width < 768) {
        this.col = 6;
      } else if (width < 576) {
        this.col = 12;
      }
    },

    onLoadProductPage(event) {
      const productPageSize = parseInt(
        process.env.VUE_APP_EACH_LOAD_PRODUCT_SIZE
      );
      console.log(event.first + this.rows, productPageSize);
      if ((event.first + this.rows) % productPageSize === 0) {
        if (this.getHasNext && !this.getLoading) {
          $(".p-paginator").prop("disabled", true);
          this.page++;
          this.queryAllHouse(this.page);
        }
      }
      // console.log(event.first, event.rows,process.env.VUE_APP_EACH_LOAD_PRODUCT_SIZE);
      // if(event.first)
    },
    ...mapActions("product", ["queryAllHouse"]),
  },
  productService: null,

  created() {
    this.productService = new ProductService();
    window.addEventListener("resize", this.resizeWidth);
  },
  unmounted() {
    window.removeEventListener("resize", this.resizeWidth);
  },
  mounted() {
    let house = this.getHouses;
    console.log(house);
    this.queryAllHouse(this.page);
    this.resizeWidth();
    // this.productService.getProducts().then((data) => (this.products = data));
  },
  watch: {
    getHouses: {
      handler(newValue) {
        console.log(newValue);
        this.products = [...this.products, ...newValue];
        $(".p-paginator").prop("disabled", false);
      },
      deep: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  background: #ffffff;
  padding: 10px;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}
#menuView {
  margin: 3rem;
}
.p-dropdown {
  width: 14rem;
  font-weight: normal;
}

.product-name {
  font-size: 1.5rem;
  font-weight: 700;
}

.product-description {
  margin: 0 0 1rem 0;
}

.product-category-icon {
  vertical-align: middle;
  margin-right: 0.5rem;
}

.product-category {
  font-weight: 600;
  vertical-align: middle;
}

::v-deep(.product-list-item) {
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;

  .product-list-detail {
    flex: 1 1 0;
  }

  .p-rating {
    margin: 0 0 0.5rem 0;
  }

  .product-price {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    align-self: flex-end;
  }

  .product-list-action {
    display: flex;
    flex-direction: column;
  }

  .p-button {
    margin-bottom: 0.5rem;
  }
}

::v-deep(.product-grid-item) {
  margin: 1.5rem;
  border: 1px solid var(--surface-border);

  .product-grid-item-top,
  .product-grid-item-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin: 2rem 0;
    width: 80% !important;
    max-width: 300px;
  }

  .product-grid-item-content {
    text-align: center;
  }

  .product-price {
    font-size: 1.5rem;
    font-weight: 600;
  }
}

@media screen and (max-width: 400px) {
  .product-list-item {
    flex-direction: column;
    align-items: center;

    img {
      margin: 2rem 0;
    }

    .product-list-detail {
      text-align: center;
    }

    .product-price {
      align-self: center;
    }

    .product-list-action {
      display: flex;
      flex-direction: column;
    }

    .product-list-action {
      margin-top: 2rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }
}
#imgSkeleton {
  width: 80%;
  margin: auto;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  position: relative;
}
</style>
