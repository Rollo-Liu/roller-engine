namespace Roller {

	export abstract class Component {

		public enabled: boolean = true;
		public parentGameObject: GameObject;

		public update(): void { }
		public fixedUpdate(): void { }
		public lateUpdate(): void { }

	}

}