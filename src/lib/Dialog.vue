<template>
    <teleport v-if="visible" to="body">
        <template v-if="closeOnClickOverlay">
          <div class="gulu-dialog-overlay"  @click="cancel"></div>
        </template>
        <template v-else>
          <div class="gulu-dialog-overlay"></div>
        </template>
        <div class="gulu-dialog-wrapper">
            <div class="gulu-dialog">
                <header><slot name="header"/><span @click="cancel" class="gulu-dialog-close"></span></header>
                <main>
                    <slot name="content" />
                </main>
                <footer>
                    <Button @click="cancel">{{cancelName}}</Button>
                    <Button @click="ok" level="main">{{okName}}</Button>
                </footer>
            </div>
        </div>
    </teleport>
</template>
<script lang="ts">
import Button from './Button.vue';
export default {
    components: {Button},
    props: {
        visible: {
            type: Boolean,
            default () {
                return false
            }
        },
        closeOnClickOverlay: {
            type: Boolean,
            default: true
        },
        ok: {
            type: Function,
            default () {
              return () => {}
            }
        },
        cancel: {
            type: Function,
            default () {
              return () => {}
            }
        },
        okName: {
          type: String,
          default: '确定'
        },
          cancelName: {
            type: String,
            default: '取消'
          }
    },
    setup (props, context) {
        const close = () =>{
            context.emit('update:visible', false)
        }
        const ok = () => {
            if(props.ok?.() !== false){
              close()
            }
        }
        const cancel = () => {
            props.cancel?.()
            close()
        }
        return { close, ok, cancel }
    },
}
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.gulu-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  >header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  >main {
    padding: 12px 16px;
  }
  >footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
