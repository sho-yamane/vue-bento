<template>
  <div class="test">
    <div class="test-heading">
      <vb-heading>VbHeading</vb-heading>
      <vb-heading-danger>VbHeadingDanger</vb-heading-danger>
      <vb-heading-dark>VbHeadingDark</vb-heading-dark>
      <vb-heading-dark1>VbHeadingDark1</vb-heading-dark1>
      <vb-heading-dark2>VbHeadingDark2</vb-heading-dark2>
      <vb-heading-dark3>VbHeadingDark3</vb-heading-dark3>
      <vb-heading-dark4>VbHeadingDark4</vb-heading-dark4>
      <vb-heading-dark5>VbHeadingDark5</vb-heading-dark5>
      <vb-heading-dark6>VbHeadingDark6</vb-heading-dark6>
      <vb-heading-dark7>VbHeadingDark7</vb-heading-dark7>
      <vb-heading-dark8>VbHeadingDark8</vb-heading-dark8>
      <vb-heading-dark9>VbHeadingDark9</vb-heading-dark9>
      <vb-heading-info>VbHeadingInfo</vb-heading-info>
      <vb-heading-light>VbHeadingLight</vb-heading-light>
      <vb-heading-light1>VbHeadingLight1</vb-heading-light1>
      <vb-heading-light2>VbHeadingLight2</vb-heading-light2>
      <vb-heading-light3>VbHeadingLight3</vb-heading-light3>
      <vb-heading-light4>VbHeadingLight4</vb-heading-light4>
      <vb-heading-light5>VbHeadingLight5</vb-heading-light5>
      <vb-heading-light6>VbHeadingLight6</vb-heading-light6>
      <vb-heading-light7>VbHeadingLight7</vb-heading-light7>
      <vb-heading-light8>VbHeadingLight8</vb-heading-light8>
      <vb-heading-light9>VbHeadingLight9</vb-heading-light9>
    </div>
    <div class="test-text">
      <vb-text>VbText</vb-text>
      <vb-text-danger>VbTextDanger</vb-text-danger>
      <vb-text-dark>VbTextDark</vb-text-dark>
      <vb-text-dark1>VbTextDark1</vb-text-dark1>
      <vb-text-dark2>VbTextDark2</vb-text-dark2>
      <vb-text-dark3>VbTextDark3</vb-text-dark3>
      <vb-text-dark4>VbTextDark4</vb-text-dark4>
      <vb-text-dark5>VbTextDark5</vb-text-dark5>
      <vb-text-dark6>VbTextDark6</vb-text-dark6>
      <vb-text-dark7>VbTextDark7</vb-text-dark7>
      <vb-text-dark8>VbTextDark8</vb-text-dark8>
      <vb-text-dark9>VbTextDark9</vb-text-dark9>
      <vb-text-info>VbTextInfo</vb-text-info>
      <vb-text-light>VbTextLight</vb-text-light>
      <vb-text-light1>VbTextLight1</vb-text-light1>
      <vb-text-light2>VbTextLight2</vb-text-light2>
      <vb-text-light3>VbTextLight3</vb-text-light3>
      <vb-text-light4>VbTextLight4</vb-text-light4>
      <vb-text-light5>VbTextLight5</vb-text-light5>
      <vb-text-light6>VbTextLight6</vb-text-light6>
      <vb-text-light7>VbTextLight7</vb-text-light7>
      <vb-text-light8>VbTextLight8</vb-text-light8>
      <vb-text-light9>VbTextLight9</vb-text-light9>
    </div>
    <div class="test-button">
      <vb-btn>VbButton</vb-btn>
      <vb-btn-primary>VbButtonPrimary</vb-btn-primary>
      <vb-btn-danger>VbButtonDanger</vb-btn-danger>
      <vb-btn-disable>VbButtonDisable</vb-btn-disable>
      <vb-btn-success>VbButtonSuccess</vb-btn-success>
    </div>
    <div class="test-list">
      <vb-list :list="list"/>
    </div>
    <div class="test-table">
      <vb-table line="line">
        <vb-thead>
          <vb-tr>
            <vb-th paint="paint">VbTh</vb-th>
            <vb-th>VbTh</vb-th>
            <vb-th>VbTh</vb-th>
            <vb-th>VbTh</vb-th>
          </vb-tr>
        </vb-thead>
        <vb-tbody>
          <vb-tr>
            <vb-td>VbTd</vb-td>
            <vb-td>VbTd</vb-td>
            <vb-td>VbTd</vb-td>
            <vb-td>VbTd</vb-td>
          </vb-tr>
        </vb-tbody>
      </vb-table>
    </div>
    <div class="test-alert">
      <vb-alert>
        <vb-text>VbAlert + VbText</vb-text>
      </vb-alert>
      <vb-alert color="primary">
        <vb-text>VbAlert + VbText</vb-text>
      </vb-alert>
      <vb-alert color="info">
        <vb-text>VbAlert + VbText</vb-text>
      </vb-alert>
      <vb-alert color="success">
        <vb-text>VbAlert + VbText</vb-text>
      </vb-alert>
      <vb-alert color="warning">
        <vb-text>VbAlert + VbText</vb-text>
      </vb-alert>
      <vb-alert color="danger">
        <vb-text>VbAlert + VbText</vb-text>
      </vb-alert>
    </div>
    <div class="test-form">
      <vb-select-box :options="options"/>
      <vb-select-box 
        :options="options" 
        :disabled="true"/>
      <vb-select-box 
        :options="options" 
        :multiple="true"/>
    </div>
  </div>
</template>

<script>
import { components } from './wrapper'

export default {
  name: 'Test',
  components: components.reduce((componentMap, component) => {
    componentMap[component.name] = component
    return componentMap
  }, {}),
  data() {
    return {
      list: [
        'リストのテキストは1行目以外をインデントして読みやすくする',
        'リストのテキストは1行目以外をインデントして読みやすくする'
      ],
      options: [
        { text: 'abc', value: 1 },
        { text: 'def', value: 2 },
        { text: 'ghi', value: 3 }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.test {
  background: $grey-500;
}
</style>
