function p(t){window.enmity.plugins.registerPlugin(t)}const a=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const o=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const T=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const S=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme;const u=window.enmity.modules.common.Linking,F=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function A(t){return window.enmity.patcher.create(t)}var C="FixConnectingFixed",w="1.0.0",v="Fix the annoying Connecting bug. Fixed by octet-stream.",E=[{name:"mafu",id:"519760564755365888"},{name:"octet-stream",id:"263530950070239235"}],f="#0D324D",b={name:C,version:w,description:v,authors:E,color:f};const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList;const I=e.Image;e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const x=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const l=e.Text;e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable;const g=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const i=e.FormRow,P=e.FormSection;e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;function c(t){return window.enmity.assets.getIDByName(t)}function D(t,n){return window.enmity.modules.getModule(t,n)}function d(...t){return window.enmity.modules.getByProps(...t)}window.enmity.modules.common;const R=c("img_account_sync_github_white"),_=c("Discord"),L=c("img_account_sync_twitter_white"),k=d("acceptInviteAndTransitionToInviteChannel");var N=({settings:t})=>{const n=F.createThemedStyleSheet({container:{flexDirection:"row",justifyContent:"center",alignItems:"center"},image:{width:70,height:70,marginTop:20,marginLeft:20},title:{flexDirection:"column"},name:{fontSize:30,paddingTop:20,paddingLeft:20,paddingRight:30,color:a.ThemeColorMap.HEADER_PRIMARY},author:{fontSize:15,paddingLeft:50,color:a.ThemeColorMap.HEADER_SECONDARY},info:{height:45,paddingTop:3,paddingBottom:3,justifyContent:"center",alignItems:"center"},footer:{color:a.ThemeColorMap.HEADER_SECONDARY,textAlign:"center",paddingTop:10,paddingBottom:20}});return o.createElement(x,null,o.createElement(g,{style:n.container},o.createElement(I,{source:{uri:"https://avatars.githubusercontent.com/u/43488869"},style:n.image}),o.createElement(g,{style:n.title},o.createElement(l,{style:n.name},"FixConnecting"),o.createElement(l,{style:n.author},"by mafu"))),o.createElement(P,{title:"INFORMATION"},o.createElement(i,{label:"Follow me on Twitter",style:n.info,trailing:i.Arrow,leading:o.createElement(i.Icon,{source:L}),onPress:()=>{u.openURL("https://twitter.com/m4fn3")}}),o.createElement(i,{label:"Visit my server for help",style:n.info,trailing:i.Arrow,leading:o.createElement(i.Icon,{source:_}),onPress:()=>{k.acceptInviteAndTransitionToInviteChannel({inviteKey:"TrCqPTCrdq",context:{location:"Invite Button Embed"},callback:()=>{S.pop()}})}}),o.createElement(i,{label:"Check Source on GitHub",style:n.info,trailing:i.Arrow,leading:o.createElement(i.Icon,{source:R}),onPress:()=>{u.openURL("https://github.com/m4fn3/FixConnecting")}})),o.createElement(l,{style:n.footer},`v${w}`))};const y=A("FixConnecting"),B={...b,onStart(){let t=d("startSession","switchAccountToken"),n=D(m=>{var s;return m._dispatcher&&((s=m.getName)==null?void 0:s.call(m))==="AuthenticationStore"}),r=d("dispatch","subscribe");const h=y.after(t,"startSession",(m,s,M)=>{h(),setTimeout(()=>{n.getSessionId()||(r.dispatch({type:"APP_STATE_UPDATE",state:"inactive"}),r.dispatch({type:"APP_STATE_UPDATE",state:"background"}),r.dispatch({type:"APP_STATE_UPDATE",state:"active"}),T.open({key:"TOAST",content:"Automatically fixed Connecting bug!",icon:c("Check")}))},300)})},onStop(){y.unpatchAll()},getSettingsPanel({settings:t}){return o.createElement(N,{settings:t})}};p(B);
