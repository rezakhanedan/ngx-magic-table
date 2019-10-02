import { Component, Input, Output, EventEmitter, ContentChildren, TemplateRef,
  QueryList, SimpleChanges, AfterContentInit, OnChanges } from '@angular/core';
import { NamedTemplateDirective } from './../ngx-named-template/ngx-named-template.directive';

@Component({
  selector: 'ngx-column-template',
  templateUrl: './ngx-column-template.component.html',
  styleUrls: ['./ngx-column-template.component.css']
})
export class NgxColumnTemplateComponent implements AfterContentInit, OnChanges {
  @Input() name: string;
  @Input() parent: string;
  @Input() title: string;
  @Input() index: number;
  @Input() sortable: boolean;
  @Input() draggable: boolean;
  @Input() collection: string;
  @Input() visible: boolean;
  @Input() cellWidth: number;
  @Input() headerCheckbox: boolean;
  @Input() bodyCheckbox: boolean;
  @Input() editCheckbox: boolean;

  @Output() changed = new EventEmitter();
  @Output() toggleColumnsChange = new EventEmitter();
  @Output() checkChange = new EventEmitter();

  public filters: any[] = [];
  @ContentChildren(NamedTemplateDirective) templates: QueryList<NamedTemplateDirective>;

  public header: TemplateRef<any>;
  public body: TemplateRef<any>;
  public filter: TemplateRef<any>;

  public constructor() {
    this.name = '';
    this.parent = '';
    this.title = '';
    this.index = 0;
    this.cellWidth = 0;
    this.sortable = true;
    this.visible = true;
    this.draggable = true;
    this.collection = '';
    this.headerCheckbox = false;
    this.bodyCheckbox = false;
    this.editCheckbox = false;
  }

  static normalizeIndexes(templates: NgxColumnTemplateComponent[]) {
    templates
      .sort((first, second) => {
        if (first.parent < second.parent) {
          return -1;
        }
        if (first.parent > second.parent) {
          return 1;
        }

        if (first.index < second.index) {
          return -1;
        }
        if (first.index > second.index) {
          return 1;
        }
        return 0;
      })
      .forEach((t, index) => {
        t.index = index;
      });
  }

  ngAfterContentInit() {
    const h = this.templates.find(t => t.name === 'header');
    this.header = h ? h.template : undefined;
    const b = this.templates.find(t => t.name === 'body');
    this.body = b ? b.template : undefined;
    const f = this.templates.find(t => t.name === 'filter');
    this.filter = f ? f.template : undefined;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changed.emit(this);
  }

  emitToggle(): void {
    this.toggleColumnsChange.emit();
  }

  emitCheckChange(row: any): void {
    this.checkChange.emit(row);
  }
}
