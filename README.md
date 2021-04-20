# demo1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# ������� State �����ݵ����ַ�ʽ

- ʹ�� `this.$store.state` �����з���
- ʹ�� `mapState` �����з���

> 1.�� vuex �а��赼�� mapState ����
> `import {mapState} from 'vuex'`

> 2.ͨ��`mapState`��������ǰ�����Ҫ��ȫ�����ݣ�ӳ�䵽��ǰ����� computed ��������

```vue
computed: { ...mapState(['count']) }
```

# Mutation--�޸� State �е�����

ʹ�� Mutation���� Motation �����һ�������� state �����޸ģ����� Mutation �ķ�ʽ�����֣�

- ����`this.$store.commit`���������д���
- ����`mapMutations`�����д���

> 1.�� vuex �а��赼�� mapMutations ����
> `import { mapMutations } from 'vuex'`

> 2.ͨ��`mapMutations`��������Ҫ�� Mutations ������ӳ�䵽��ǰ����� methods ����

```vue
methods: { ...mapMutations (['add', 'addN']) }
```

> ��Ҫע����ǣ�
> **_Mutations �в���д�첽�Ĵ��룬����ҳ����˵���ʵ�ʵ�ֵû�иı�_**  
> ʹ��**Action**�������첽����

# Action--�첽����

���ͨ���첽����������ݣ�����ͨ�� Action������ʹ�� Mutation�������� Action �л���Ҫͨ������ Mutation �ķ�ʽ��ӱ������

> ����

```vue
actions:{ addAsync(context){ setTimeout(()=>{ context.commit('add') },1000) } }
```

> ������ʽ

- ����`this.$store.dispatch`���� Action
- ����`mapActions`���� Action

> ��һ��

```vue
this.$store.dispatch('addAsync')
```

> �ڶ��� 1.�� vuex �а��赼�� mapActions ����
> `import { mapActions } from 'vuex'`

> 2.ͨ��`mapActions`��������Ҫ�� Actions ������ӳ�䵽��ǰ����� methods ����

```vue
methods: { ...mapActions (['addAsync', 'addNAsync']) }
```

# Getter--�� store �����ݼӹ�����

1. Getter �ӹ����� store �е����ݣ����������ݣ����ǲ���� store �е����ݽ����޸ģ������� Vue �еļ������ԡ�
2. Store �����ݱ仯��Getter Ҳ����ű仯��

```vue
getters:{ showNum: state => { return '��ǰ��������Ϊ' + state.count } }
```

3. ʹ�÷�ʽ

- ͨ��`this.$store.getters.����`����
- ͨ��`mapGetters`����

