<template>
  <view class="page">
    <!-- 顶部标题（由 pages.json 设置为 UNOFOOD） -->

    <!-- 搜索栏：极简iOS风格，不添加未提供参数 -->
    <view class="search-bar">
      <input
        class="search-input"
        type="text"
        :value="searchText"
        placeholder="搜索附近店铺或惊喜袋"
        confirm-type="search"
        @confirm="onSearchConfirm"
      />
    </view>

    <!-- 列表占位：使用黄色块模拟图片占位，遵循你的占位颜色规范 -->
    <scroll-view class="list" scroll-y>
      <view class="card store-card" aria-role="group" aria-label="店铺卡片占位">
        <view class="thumb thumb-image" aria-role="img" aria-label="图片占位（黄色）"></view>
        <view class="info">
          <text class="title">附近店铺（占位）</text>
          <text class="sub">距离与营业状态（占位）</text>
        </view>
      </view>

      <view class="card bag-card" aria-role="group" aria-label="惊喜袋卡片占位">
        <view class="thumb thumb-image" aria-role="img" aria-label="图片占位（黄色）"></view>
        <view class="info">
          <text class="title">惊喜袋（占位）</text>
          <text class="sub">品类说明、提货时间段、库存（占位）</text>
        </view>
      </view>
    </scroll-view>
  </view>
  
</template>

<script>
export default {
  data() {
    return {
      searchText: '',
    }
  },
  onLoad() {
    // 页面加载日志（遵循项目规则：添加日志与必要的错误处理）
    try {
      console.log('[UNOFOOD] Index page loaded')
    } catch (err) {
      console.error('[UNOFOOD] log failed', err)
    }
  },
  methods: {
    onSearchConfirm(e) {
      try {
        const value = e.detail && e.detail.value ? e.detail.value : ''
        this.searchText = value
        console.log('[UNOFOOD] search confirm:', value)
        // 暂不发起请求：不添加未提供的参数或伪造数据
      } catch (err) {
        console.error('[UNOFOOD] search error', err)
      }
    },
  },
}
</script>

<style>
/* 页面整体：极简、留白、呼吸感 */
.page {
  display: flex;
  flex-direction: column;
  padding: 24rpx;
}

.search-bar {
  background-color: #fff;
  border-radius: 16rpx;
  padding: 16rpx 20rpx;
  box-shadow: 0 4rpx 16rpx rgba(0,0,0,0.04);
  margin-bottom: 24rpx;
}

.search-input {
  font-size: 28rpx;
}

.list {
  height: calc(100vh - 160rpx);
}

.card {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 16rpx;
  padding: 16rpx;
  margin-bottom: 16rpx;
  box-shadow: 0 4rpx 16rpx rgba(0,0,0,0.04);
}

.thumb {
  width: 120rpx;
  height: 120rpx;
  border-radius: 12rpx;
  margin-right: 16rpx;
}

/* 图片占位：黄色 */
.thumb-image {
  background-color: #FFD400; /* 近似微信黄 */
}

.info {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 30rpx;
  color: #000;
}

.sub {
  font-size: 24rpx;
  color: #666;
  margin-top: 8rpx;
}
</style>
