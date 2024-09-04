export function getTitle(){
    const title = document.querySelector('.title');
    return title.textContent;
}

console.log(getTitle());

export function getDescription(){
    const element = document.querySelector('.about');
    return element.innerText;
};

console.log(getDescription());

export function getPlans(){
    const plans = document.querySelector('.plans');
    return plans.innerHTML;
};

console.log(getPlans());

export function getGoal(){
    const goal = document.querySelector('.goal');
    return goal.outerHTML;
}

console.log(getGoal());