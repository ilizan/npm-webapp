<template>
	<section>
		<quill-editor 
        v-model="content" 
        ref="myQuillEditor" 
        :options="editorOption" 
        @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
        @change="onEditorChange($event)">
    </quill-editor>
    <el-button type="primary" @click="show()">预览</el-button>
    <hr/>
    {{content}}
	</section>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
export default {
  name: "editor",
    components: {
        quillEditor
    },
	data(){
		return {
            content: '<p><u>1234</u><u style="color: rgb(230, 0, 0);">5</u><u>6789</u></p><p><u>﻿</u><img src="data:image/png;base64,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"></p>',
            editorOption: {
                // something config
            }
		}
	},
	methods: {
        onEditorBlur(){//失去焦点事件
        },
        onEditorFocus(){//获得焦点事件
        },
        onEditorChange(){//内容改变事件
        },
        show(){
            this.$alert(this.content, '编辑器预览', {
                dangerouslyUseHTMLString: true
            });
        }
	},
	mounted() {
    
  },
  computed: {
            editor() {
                return this.$refs.myTextEditor.quillEditor;
            }
        }
};
</script>

<style scoped>
</style>