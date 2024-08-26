export const callbackPrompt = {
    message: 'Tell your phone',
    showPrompt(){
      prompt(this.message);
    },
    showDeferredPrompt(ms){
      setTimeout(()=> this.showPrompt(),ms)
    }
  };
